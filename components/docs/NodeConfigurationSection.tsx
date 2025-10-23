import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CollapsibleSection from '@/components/ui/CollapsibleSection';

export interface ConfigField {
  name: string;
  type: string;
  required: boolean;
  valueType?: string;
  defaultValue?: string;
  description: string;
}

interface NodeConfigurationSectionProps {
  inputFields?: {
    required?: ConfigField[];
    optional?: ConfigField[];
  };
  outputFields?: ConfigField[];
}

export default function NodeConfigurationSection({ 
  inputFields, 
  outputFields 
}: NodeConfigurationSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Node Configuration</h2>
      
      {inputFields && (
        <CollapsibleSection title="Input Fields" defaultOpen={true}>
          <div className="space-y-4">
            {inputFields.required && inputFields.required.length > 0 && (
              <Card className="border-neutral-700">
                <CardHeader>
                  <CardTitle>Required Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inputFields.required.map((field, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{field.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-neutral-400">Type:</span>
                            <span className="ml-2 text-neutral-200">{field.type}</span>
                          </div>
                          <div>
                            <span className="text-neutral-400">Required:</span>
                            <span className="ml-2 text-green-500">Yes</span>
                          </div>
                          {field.valueType && (
                            <div>
                              <span className="text-neutral-400">Value Type:</span>
                              <span className="ml-2 text-neutral-200">{field.valueType}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-neutral-400 mt-2">{field.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {inputFields.optional && inputFields.optional.length > 0 && (
              <Card className="border-neutral-700">
                <CardHeader>
                  <CardTitle>Optional Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inputFields.optional.map((field, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{field.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-neutral-400">Type:</span>
                            <span className="ml-2 text-neutral-200">{field.type}</span>
                          </div>
                          <div>
                            <span className="text-neutral-400">Required:</span>
                            <span className="ml-2 text-neutral-200">No</span>
                          </div>
                          {field.defaultValue && (
                            <div>
                              <span className="text-neutral-400">Default:</span>
                              <span className="ml-2 text-neutral-200">{field.defaultValue}</span>
                            </div>
                          )}
                          {field.valueType && (
                            <div>
                              <span className="text-neutral-400">Value Type:</span>
                              <span className="ml-2 text-neutral-200">{field.valueType}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-neutral-400 mt-2">{field.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CollapsibleSection>
      )}

      {outputFields && outputFields.length > 0 && (
        <CollapsibleSection title="Output Fields" defaultOpen={false}>
          <div className="space-y-4">
            <Card className="border-neutral-700">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {outputFields.map((field, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-2">{field.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-neutral-400">Type:</span>
                          <span className="ml-2 text-neutral-200">{field.type}</span>
                        </div>
                        <div>
                          <span className="text-neutral-400">Description:</span>
                          <span className="ml-2 text-neutral-200">{field.valueType}</span>
                        </div>
                      </div>
                      <p className="text-neutral-400 mt-2">{field.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>
      )}
    </section>
  );
}

