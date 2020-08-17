interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  themeColor: string;
  profilePicture: string;
}

interface Task {
  title: string;
  isComplete: boolean;
  created: number;
  description: string;
  attachments: [];
  activity: [];
}

interface Folder {
  name: string;
  tasks: Task[];
}

interface Data {
  user: User;
  folders: Folder[];
  team: User[];
}

export const mockData: Data = {
  user: {
    id: 0,
    firstName: 'Yazeed',
    lastName: 'Bzadough',
    email: 'ybzadough@gmail.com',
    themeColor: '#4d76fd',
    profilePicture: '/logo192.png',
  },
  folders: [
    {
      name: 'marketing',
      tasks: [
        {
          title: 'Create sales funnel',
          isComplete: false,
          created: new Date('2020-01-01').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
        {
          title: 'Read that marketing book',
          isComplete: true,
          created: new Date('2019-11-27').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
        {
          title: 'Follow up with Dr. Scholl',
          isComplete: true,
          created: new Date('2020-05-10').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
      ],
    },
    {
      name: 'design',
      tasks: [
        {
          title: 'Redesign landing page',
          isComplete: true,
          created: new Date('2020-02-22').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
        {
          title: 'Finish Scrimba course',
          isComplete: false,
          created: new Date('2020-04-05').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
      ],
    },
    {
      name: 'development',
      tasks: [
        {
          title: 'Write an article about design',
          isComplete: false,
          created: new Date('2020-03-01').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
      ],
    },
    {
      name: 'management',
      tasks: [
        {
          title: 'Learn management',
          isComplete: false,
          created: new Date('2020-03-01').getTime(),
          description: '',
          attachments: [],
          activity: [],
        },
      ],
    },
  ],
  team: [
    {
      id: 1,
      firstName: 'Yazeed',
      lastName: 'Bzadough',
      email: 'ybzadough@gmail.com',
      themeColor: '#4d76fd',
      profilePicture: '/logo192.png',
    },
    {
      id: 2,
      firstName: 'Yazeed',
      lastName: 'Bzadough',
      email: 'ybzadough@gmail.com',
      themeColor: '#4d76fd',
      profilePicture: '/logo192.png',
    },
    {
      id: 3,
      firstName: 'Yazeed',
      lastName: 'Bzadough',
      email: 'ybzadough@gmail.com',
      themeColor: '#4d76fd',
      profilePicture: '/logo192.png',
    },
    {
      id: 4,
      firstName: 'Yazeed',
      lastName: 'Bzadough',
      email: 'ybzadough@gmail.com',
      themeColor: '#4d76fd',
      profilePicture: '/logo192.png',
    },
    {
      id: 5,
      firstName: 'Yazeed',
      lastName: 'Bzadough',
      email: 'ybzadough@gmail.com',
      themeColor: '#4d76fd',
      profilePicture: '/logo192.png',
    },
  ],
};

export const getTotalTasks = (folders: Folder[]) =>
  folders.reduce((total, f) => total + f.tasks.length, 0);

export const countCompleteTasks = (folders: Folder[]) =>
  folders.reduce(
    (total, f) => total + f.tasks.filter((t) => t.isComplete).length,
    0
  );
