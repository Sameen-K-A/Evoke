import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

interface StorageIndicatorProps {
   used: number;
   total: number;
}

const StorageIndicator: React.FC<StorageIndicatorProps> = ({ used , total }) => {
   const usedGB = (used / 1024).toFixed(1);
   const totalGB = (total / 1024).toFixed(0);
   const percentage = Math.min((used / total) * 100, 100);
   const navigate = useNavigate();

   return (
      <div className="w-full max-w-xs space-y-4">
         <div className="space-y-1">
            <div
               role="progressbar"
               aria-valuenow={percentage}
               aria-valuemin={0}
               aria-valuemax={100}
               className="h-2 w-full rounded-full bg-gray-200"
            >
               <div className="h-full rounded-full bg-orange-500 transition-all duration-300" style={{ width: `${percentage}%` }} />
            </div>
            <p className="text-xs text-center opacity-70">{usedGB} GB of {totalGB} GB used</p>
         </div>
         <Button variant="bordered" size="sm" fullWidth onClick={() => navigate("/settings/pro")} >
            Get more storage
         </Button>
      </div>
   );
};

export default StorageIndicator;
