"use client"

import React from 'react';
import { Calendar, Shield, Settings, Clock } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  RelatedResourcesSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from "@/components/ui/CodeBlock";

export default function GoogleCalendarCreateEventNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Google Account Connection",
      description: "Must have a connected Google account with appropriate permissions",
      requirements: [
        "Google account connected via OAuth",
        "Google Calendar API access",
        "Calendar creation and modification permissions"
      ]
    },
    {
      icon: Calendar,
      title: "Calendar Access",
      description: "Understanding of Google Calendar structure and event creation",
      requirements: [
        "Access to at least one Google Calendar",
        "Understanding of event properties (title, description, location, time)",
        "Knowledge of timezone handling and date formats"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "The following OAuth scopes are required for this node to function properly",
      requirements: [
        "https://www.googleapis.com/auth/calendar"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Calendar}
        title="Google Calendar Create Event"
        description="Create calendar events in your connected Google account"
        nodeType="Action"
        category="Google Calendar"
        iconName="Google Calendar"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Calendar Create Event</strong> node allows you to create calendar events in your connected Google account. This powerful automation tool integrates with Google Calendar API to provide intelligent event creation capabilities for your workflows."
        keyFeatures={[
          "<strong>Event Creation:</strong> Create timed or all-day events with full customization",
          "<strong>Attendee Management:</strong> Add attendees with email invitations",
          "<strong>Timezone Support:</strong> Handle multiple timezones with IANA timezone codes",
          "<strong>Dynamic Calendar Selection:</strong> Choose from available calendars dynamically",
          "<strong>Rich Event Details:</strong> Support for title, description, location, and more",
          "<strong>Error Handling:</strong> Built-in success/failure tracking and validation"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Calendar",
              type: "dynamic_select",
              required: true,
              valueType: "string",
              description: "Choose which calendar to add the event to. The node will dynamically load your available calendars."
            },
            {
              name: "Title",
              type: "text",
              required: true,
              valueType: "string",
              description: "Event title that will be displayed in the calendar."
            },
            {
              name: "Start Date/Time",
              type: "text",
              required: true,
              valueType: "string",
              description: "ISO 8601 datetime (e.g., 2024-08-31T10:00:00). For all-day events, provide date only (e.g., 2024-08-31)."
            },
            {
              name: "End Date/Time",
              type: "text",
              required: true,
              valueType: "string",
              description: "ISO 8601 datetime or date. For all-day events, end date is exclusive (e.g., +1 day)."
            }
          ],
          optional: [
            {
              name: "Description",
              type: "textarea",
              required: false,
              valueType: "string",
              description: "Event description (supports basic text)."
            },
            {
              name: "Location",
              type: "text",
              required: false,
              valueType: "string",
              description: "Event location."
            },
            {
              name: "All Day Event",
              type: "dropdown",
              required: false,
              valueType: "boolean",
              description: "Create an all-day event (ignores time component). Options: true, false. Default: false."
            },
            {
              name: "Time Zone",
              type: "text",
              required: false,
              valueType: "string",
              description: "IANA time zone (e.g., America/Los_Angeles). Defaults to UTC."
            },
            {
              name: "Attendees",
              type: "text",
              required: false,
              valueType: "string",
              description: "Comma-separated list of attendee email addresses."
            }
          ]
        }}
        outputFields={[
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the event was successfully created, false otherwise."
          },
          {
            name: "Event ID",
            type: "string",
            required: false,
            valueType: "Unique event identifier",
            description: "The unique ID of the created event."
          },
          {
            name: "Event Link",
            type: "string",
            required: false,
            valueType: "HTML link to event",
            description: "Direct HTML link to view the event in Google Calendar."
          },
          {
            name: "Event",
            type: "object",
            required: false,
            valueType: "Full event object",
            description: "Complete event object with all details from Google Calendar API."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Event Creation</CardTitle>
              <CardDescription>
                Create a simple calendar event with basic details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "calendar": "primary",
  "title": "Team Meeting",
  "startDateTime": "2024-08-31T10:00:00",
  "endDateTime": "2024-08-31T11:00:00",
  "description": "Weekly team standup meeting",
  "location": "Conference Room A"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a one-hour team meeting with description and location.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>All-Day Event</CardTitle>
              <CardDescription>
                Create an all-day event for holidays or special occasions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "calendar": "primary",
  "title": "Company Holiday",
  "startDateTime": "2024-12-25",
  "endDateTime": "2024-12-26",
  "allDay": true,
  "description": "Christmas Day - Office Closed"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates an all-day holiday event spanning Christmas Day.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Meeting with Attendees</CardTitle>
              <CardDescription>
                Create an event with multiple attendees and timezone handling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "calendar": "primary",
  "title": "Project Kickoff Meeting",
  "startDateTime": "2024-08-31T14:00:00",
  "endDateTime": "2024-08-31T15:30:00",
  "timeZone": "America/New_York",
  "attendees": "john@company.com, jane@company.com, bob@company.com",
  "description": "Initial project planning and team introduction",
  "location": "Virtual Meeting"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a project kickoff meeting with multiple attendees in Eastern timezone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Event Scheduling</CardTitle>
              <CardDescription>
                Complete workflow for automated event creation and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📅 Schedule Trigger → 📊 Process Data → 📅 Create Event → 📧 Send Invites → ✅ Confirm</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically create calendar events based on scheduled triggers, process data, and send notifications.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Event Creation</CardTitle>
              <CardDescription>
                Create events with dynamic content using template variables
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "calendar": "primary",
  "title": "{{user.name}} - {{workflow.name}} Review",
  "startDateTime": "{{date.tomorrow}}T09:00:00",
  "endDateTime": "{{date.tomorrow}}T10:00:00",
  "description": "Review meeting for {{workflow.name}} workflow execution",
  "attendees": "{{user.email}}, manager@company.com"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates personalized review meetings using dynamic template variables for user and workflow data.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive event titles that clearly indicate the purpose",
          "Always specify timezone for events to avoid confusion",
          "Include relevant attendees to ensure proper notifications",
          "Use the Event ID output for follow-up operations",
          "Test with different calendar types (primary, secondary, shared)",
          "Validate datetime formats before creating events",
          "Use template variables for dynamic event creation"
        ]}
        donts={[
          "Don't create events without proper timezone specification",
          "Avoid using ambiguous event titles",
          "Don't forget to handle the Success field before proceeding",
          "Avoid creating too many events in quick succession",
          "Don't hardcode attendee emails when dynamic lists are better",
          "Avoid creating events without proper validation",
          "Don't ignore the Event Link for user notifications"
        ]}
        proTip="Use the Event ID output with other Google Calendar nodes or store it for future reference. Combine with template variables for automated event scheduling based on workflow data."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions or calendar access denied",
            solution: "Ensure your Google account connection has the calendar scope. Check that you have permission to create events in the selected calendar. Verify the OAuth connection is properly configured."
          },
          {
            title: "Invalid DateTime Format",
            symptoms: "Node fails with 'Invalid datetime format' error",
            solution: "Use ISO 8601 format for datetime fields (YYYY-MM-DDTHH:mm:ss). For all-day events, use date format (YYYY-MM-DD). Ensure timezone is properly specified."
          },
          {
            title: "Calendar Not Found",
            symptoms: "Node fails with 'Calendar not found' error",
            solution: "Verify the calendar ID is correct. Use the dynamic select to choose from available calendars. Check that the calendar exists and you have access to it."
          },
          {
            title: "Missing Required Fields",
            symptoms: "Node fails with 'Missing required fields' error",
            solution: "Ensure all required fields (Calendar, Title, Start Date/Time, End Date/Time) are provided and not empty. Check that template variables are properly resolved."
          },
          {
            title: "Attendee Email Issues",
            symptoms: "Event created but attendees not receiving invitations",
            solution: "Verify attendee email addresses are valid and properly formatted. Use comma-separated format for multiple attendees. Check that attendees have Google accounts."
          },
          {
            title: "Timezone Confusion",
            symptoms: "Events appear at wrong times or in wrong timezone",
            solution: "Always specify the timezone field. Use IANA timezone codes (e.g., America/New_York, Europe/London). Ensure start and end times are in the same timezone."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-create-spreadsheet",
            title: "Google Sheets Create Spreadsheet Node",
            description: "Create spreadsheets to track event data"
          },
          {
            href: "/docs/nodes/outlook-send-email",
            title: "Outlook Send Email Node",
            description: "Send email notifications about created events"
          },
          {
            href: "/docs/nodes/set-value",
            title: "Set Value Node",
            description: "Set constant values for event properties"
          },
          {
            href: "/docs/nodes/schedule",
            title: "Schedule Node",
            description: "Trigger workflows on a schedule for recurring events"
          },
          {
            href: "/docs/nodes",
            title: "Node Library",
            description: "Explore all available nodes"
          }
        ]}
      />
    </NodeLayout>
  );
}
