
import React from 'react';
import { QrCode } from 'lucide-react';

const QRCode: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="bg-white p-3 rounded-lg">
        <QrCode size={120} className="text-youxin-blue" />
      </div>
      <p className="text-sm text-center">סרוק לביקור באתר</p>
    </div>
  );
};

export default QRCode;
