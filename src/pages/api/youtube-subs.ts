import type { NextApiRequest, NextApiResponse } from 'next';

// Static subscriber data matching the Footer channels
const subscriberMap: Record<string, number> = {
  'UCvdbtwFCC-4OYU7zy_bM9aw': 3000,
  'UCa7wUGcDCsX0KfNQnX-WNeg': 2000,
  'UCw94ye9tfBXGKqUeMxcI-qQ': 460,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const channelId = Array.isArray(req.query.channelId)
    ? req.query.channelId[0]
    : req.query.channelId;

  if (!channelId) {
    res.status(400).json({ error: 'Missing channelId parameter' });
    return;
  }

  const subs = subscriberMap[channelId];
  if (subs === undefined) {
    res.status(404).json({ error: 'Channel not found' });
    return;
  }

  // Return subscriber count
  res.status(200).json({ subs });
} 