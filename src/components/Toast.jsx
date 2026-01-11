import { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Toast = () => {
    const { toast, showToast } = useApp();

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                showToast(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    if (!toast) return null;

    const icons = {
        success: <CheckCircle className="w-5 h-5" />,
        error: <AlertCircle className="w-5 h-5" />,
        info: <Info className="w-5 h-5" />,
    };

    const colors = {
        success: 'bg-green-50 text-green-800 border-green-200',
        error: 'bg-red-50 text-red-800 border-red-200',
        info: 'bg-blue-50 text-blue-800 border-blue-200',
    };

    return (
        <div className="fixed top-20 right-4 z-50 animate-fadeIn">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-md ${colors[toast.type]}`}>
                {icons[toast.type]}
                <p className="flex-1 text-sm font-medium">{toast.message}</p>
                <button onClick={() => showToast(null)} className="hover:opacity-70 transition-opacity">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
