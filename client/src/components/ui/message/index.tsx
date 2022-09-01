import toast, { Toaster } from 'react-hot-toast';
import {
  XIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/solid';

export const Messanger = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: 'bg-[#49266a]',
        duration: 5000,
        style: {
          color: '#d1d5db',
          fontSize: '14px',
          width: '400px',
          minHeight: '75px',
          borderRadius: '8px',
          padding: '5px 10px',
          backgroundColor: '#49266a',
        },

        success: {
          style: {},
        },
        error: {
          style: {},
        },
      }}
    />
  );
};

export const showMessage = (msg, options = {}) =>
  toast(
    (t) => (
      <div className="relative h-14 w-full flex items-center flex-nowrap">
        <div
          className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 rounded-full text-gray-400 hover:text-[#ff9f42] cursor-pointer"
          onClick={() => toast.dismiss(t.id)}
        >
          <XIcon className="text-sm" />
        </div>
        <div>{msg}</div>
      </div>
    ),
    { ...options },
  );

export const showSuccess = (msg, options = {}) =>
  showMessage(msg, {
    icon: (
      <div className="h-8 w-8">
        <CheckCircleIcon className="text-emerald-500" />
      </div>
    ),
    ...options,
  });

export const showError = (msg, options = {}) =>
  showMessage(msg, {
    icon: (
      <div className="h-8 w-8">
        <ExclamationCircleIcon className="text-red-400" />
      </div>
    ),
    ...options,
  });
