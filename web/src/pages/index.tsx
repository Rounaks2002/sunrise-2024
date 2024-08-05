import React from 'react';
import Header from '@/components/Header';
import TaskList from '@/components/Todo/TodoSection';
import { initialTasks } from '@/utils/TaskList';


export default function Home() {
    return (
<div>
    <Header></Header>
        <TaskList tasks={initialTasks}></TaskList>
</div>
    )
  }

