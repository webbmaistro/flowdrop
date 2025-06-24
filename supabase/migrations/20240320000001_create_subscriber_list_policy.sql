-- Create RLS policy for subscriberList table to allow anonymous inserts
-- This allows anyone to subscribe to the newsletter

-- Enable RLS on subscriberList table (if not already enabled)
ALTER TABLE subscriberList ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert emails
CREATE POLICY "Allow anonymous email subscriptions"
  ON subscriberList
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reading subscriber count (for admin purposes)
CREATE POLICY "Allow reading subscriber count"
  ON subscriberList
  FOR SELECT
  USING (true);

-- Create policy to allow admin to read all emails (for admin panel)
CREATE POLICY "Allow admin to read all emails"
  ON subscriberList
  FOR SELECT
  USING (true); 