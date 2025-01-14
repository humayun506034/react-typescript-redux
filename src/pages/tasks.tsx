import LoadingSpinner from "@/components/layout/LoadingSpinner";
import { AddTaskModal } from "@/components/module/tasks/addTaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";

const Tasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  // console.log({ data, isLoading });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <div className="flex justify-end items-center px-10">
        <h1 className="text-3xl font-bold text-center mr-auto">Tasks</h1>

        <div>
          <Tabs
            defaultValue="all"
            className=" text-center flex justify-end mr-5"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="low">Low</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="high">High</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex justify-center items-center my-3">
          <AddTaskModal></AddTaskModal>
        </div>
      </div>
      <div>
        {!isLoading &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.tasks.map((task: any) => (
            <TaskCard task={task} key={task._id}></TaskCard>
          ))}
      </div>
    </div>
  );
};

export default Tasks;
