/**
 * ============================================================================
 * DOCS METADATA VALIDATOR
 * ============================================================================
 * 
 * Run this script to validate that all docs pages have proper metadata:
 * 
 *   npx tsx scripts/validate-docs-metadata.ts
 * 
 * It checks:
 * - All layout.tsx files have corresponding metadata config
 * - All metadata configs have corresponding layout files
 * - Title lengths are optimal for SEO
 * - Description lengths are optimal for search results
 * - Paths match the file structure
 * - No duplicate paths
 * 
 * ============================================================================
 */

import fs from 'fs';
import path from 'path';
import { docsMetadata } from '../lib/docs-metadata-config';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

interface ValidationError {
  type: 'error' | 'warning';
  message: string;
}

const errors: ValidationError[] = [];

function validateMetadataConfig() {
  log('\n🔍 Validating Docs Metadata Configuration...\n', colors.cyan);

  const configs = Object.entries(docsMetadata);
  const paths = new Set<string>();

  for (const [key, config] of configs) {
    // Check for duplicate paths
    if (paths.has(config.path)) {
      errors.push({
        type: 'error',
        message: `Duplicate path found: ${config.path} (key: ${key})`,
      });
    }
    paths.add(config.path);

    // Validate title length
    const titleLength = config.title.length;
    if (titleLength > 60) {
      errors.push({
        type: 'warning',
        message: `Title too long (${titleLength} chars): "${config.title}" (key: ${key})\n  Recommended: 50-60 characters for optimal SEO`,
      });
    }

    // Validate description length
    const descLength = config.description.length;
    if (descLength < 120) {
      errors.push({
        type: 'warning',
        message: `Description too short (${descLength} chars): "${config.description}" (key: ${key})\n  Recommended: 150-160 characters for optimal search results`,
      });
    } else if (descLength > 160) {
      errors.push({
        type: 'warning',
        message: `Description too long (${descLength} chars): "${config.description}" (key: ${key})\n  Recommended: 150-160 characters for optimal search results`,
      });
    }

    // Check if path starts with /docs
    if (!config.path.startsWith('/docs')) {
      errors.push({
        type: 'error',
        message: `Invalid path: ${config.path} (key: ${key})\n  Must start with /docs`,
      });
    }

    // Check if corresponding layout file exists
    const layoutPath = path.join(
      process.cwd(),
      'app',
      config.path,
      'layout.tsx'
    );
    if (!fs.existsSync(layoutPath)) {
      errors.push({
        type: 'error',
        message: `Missing layout file for "${key}": ${layoutPath}\n  Path in config: ${config.path}`,
      });
    }
  }

  // Check for layout files without metadata config
  // Build a map of actual layout file paths
  const layoutPaths = new Set<string>();
  
  function scanLayouts(dir: string, basePath: string = '/docs') {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.name.startsWith('_')) continue; // Skip _templates
      
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        scanLayouts(fullPath, `${basePath}/${item.name}`);
      } else if (item.name === 'layout.tsx' && basePath !== '/docs') {
        // Found a layout file (but skip the main docs layout)
        layoutPaths.add(basePath);
      }
    }
  }
  
  const docsDir = path.join(process.cwd(), 'app', 'docs');
  scanLayouts(docsDir);
  
  // Check if each layout has a config
  const configPaths = new Set(Object.values(docsMetadata).map((c) => c.path));
  
  for (const layoutPath of layoutPaths) {
    if (!configPaths.has(layoutPath)) {
      errors.push({
        type: 'warning',
        message: `Layout file exists but no metadata config found: ${layoutPath}\n  Add config to lib/docs-metadata-config.ts`,
      });
    }
  }
  
  // Check if each config has a layout
  for (const configPath of configPaths) {
    if (!layoutPaths.has(configPath)) {
      const layoutFile = path.join(process.cwd(), 'app', configPath, 'layout.tsx');
      errors.push({
        type: 'warning',
        message: `Config exists but layout file not found: ${layoutFile}\n  Create the layout file or remove the config`,
      });
    }
  }

  return errors;
}

// Run validation
const validationErrors = validateMetadataConfig();

// Display results
const errorCount = validationErrors.filter((e) => e.type === 'error').length;
const warningCount = validationErrors.filter((e) => e.type === 'warning').length;

if (validationErrors.length === 0) {
  log('✅ All docs metadata is valid!\n', colors.green);
  process.exit(0);
} else {
  // Display errors
  const errors = validationErrors.filter((e) => e.type === 'error');
  if (errors.length > 0) {
    log(`\n❌ ${errors.length} Error${errors.length === 1 ? '' : 's'}:\n`, colors.red);
    errors.forEach((e) => {
      log(`  • ${e.message}\n`, colors.red);
    });
  }

  // Display warnings
  const warnings = validationErrors.filter((e) => e.type === 'warning');
  if (warnings.length > 0) {
    log(`\n⚠️  ${warnings.length} Warning${warnings.length === 1 ? '' : 's'}:\n`, colors.yellow);
    warnings.forEach((w) => {
      log(`  • ${w.message}\n`, colors.yellow);
    });
  }

  log('\n📝 Summary:', colors.cyan);
  log(`  Errors: ${errorCount}`, errorCount > 0 ? colors.red : colors.green);
  log(`  Warnings: ${warningCount}`, warningCount > 0 ? colors.yellow : colors.green);
  log(`  Total configs: ${Object.keys(docsMetadata).length}\n`, colors.blue);

  // Exit with error code if there are errors
  process.exit(errorCount > 0 ? 1 : 0);
}

