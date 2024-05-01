import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect, useState } from "react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

interface DriverInfo {
  _id: string;
  name: string;
  phone: string;
  imageUrl: string;
  busID: string;
  routeID: string;
  from: string;
  to: string;
  time: string;
}

interface RecentSalesProps {
  userName: string; // Add a prop for the username
}

export default function RecentSales({ userName }: RecentSalesProps) {
  const [information, setInformation] = useState<DriverInfo[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(`${serverUrl}/driver/info`);
        setInformation(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchInfo();
  }, []);

  // Filter the information array to include only data for the specified username
  const filteredInfo = information.filter((info) => info.name === userName);

  return (
    <div className="space-y-8">
      {filteredInfo.map((info) => (
        <div className="flex items-center" key={info._id}>
          <div className="flex md:flex-row space-y-1 md:hover:bg-transparent hover:bg-secondary py-4 rounded-md justify-between items-center w-full flex-col">
            <Avatar className="h-9 w-9">
              <AvatarImage src={info.imageUrl} alt="Avatar" />
              <AvatarFallback>{info.name}</AvatarFallback>
            </Avatar>
            <div className="md:ml-4 flex flex-col md:items-start items-center space-y-1">
              <p className="text-sm font-medium leading-none">{info.name}</p>
              <p className="text-sm text-muted-foreground">{info.time}</p>
            </div>
            <div className="md:ml-auto flex items-center font-medium">
              {info.from}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 256 256"
                className="mx-2"
              >
                <path
                  fill="currentColor"
                  d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z"
                />
              </svg>
              {info.to}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
