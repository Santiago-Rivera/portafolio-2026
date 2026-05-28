-- Revoke SELECT from anon/authenticated so contact_messages is not discoverable via GraphQL
REVOKE SELECT ON public.contact_messages FROM anon, authenticated;

-- Replace overly permissive INSERT policy with one that validates input length
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;

CREATE POLICY "Anyone can submit valid contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 100
  AND length(trim(email)) BETWEEN 3 AND 254
  AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(message)) BETWEEN 1 AND 5000
);