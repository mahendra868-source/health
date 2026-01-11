import { FileQuestion } from 'lucide-react';

const EmptyState = ({ icon: Icon = FileQuestion, title, description, action }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
            <p className="text-gray-600 mb-6 max-w-md">{description}</p>
            {action && action}
        </div>
    );
};

export default EmptyState;
