
interface ToastProps {
  message: string;
  type: 'info' | 'success' | 'error';
  show: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, show, onClose }: ToastProps) {

  if (!show) return null;

  const bgColor = type === 'info' ? 'bg-[#F1F4FD]' : type === 'success' ? 'bg-[#EFFAF6]' : 'bg-[#FDEDF0]';

  return (
    <div className={`${bgColor} text-sm my-4 space-y-2 text-[#0A0D14] px-4 py-2 rounded-md`}>
      {message}
    </div>
  );
}
