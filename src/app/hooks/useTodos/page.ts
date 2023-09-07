import todoService from "@/app/services/todoService/page";
import { useQuery } from "@tanstack/react-query";


//creating a custom hook that requests data from an axios request
export const useTodos=()=>{
   return useQuery(["todos"], () => todoService.getAll(), {
        select: ({ data }) => data,
      });
}