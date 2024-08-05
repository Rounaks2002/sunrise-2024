import React from 'react';
import TaskCard from '@/components/Todo/TodoCard';
import Task from '@/model/Task';
import { Heading } from '../Heading';
interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width:"33.33%",gap:"4px" }}>
          {tasks.map((task, index) => (
            <div key={index} style={{ flex: '1 1 33%' }}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
      );
    };

export default TaskList;
