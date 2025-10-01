'use client';

import dynamic from 'next/dynamic';

const FeedbackWidget = dynamic(() => import('./FeedbackWidget'), { ssr: false });

export default function ClientFeedbackWidget() {
  return (
    <FeedbackWidget
      position="bottom-right"
      primaryColor="#667eea"
      title="Enviar Feedback"
      subtitle="Adoraríamos ouvir sua opinião!"
    />
  );
}
