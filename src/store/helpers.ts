export interface ITask {
    id: string | number;
    title: string;
    description: string;
    isDone: boolean;
}

export interface IDailyTaskList {
    date: Date;
    tasks: ITask[];
}

const getDateConstructor = () => {
    let currDate = new Date();
    return () => {
        const today = new Date(currDate);
        currDate = new Date(currDate.setDate(today.getDate() + 1));
        return today;
    }
}
export const getDate = getDateConstructor();

export const taskListData: IDailyTaskList[] = [
    {
        date: getDate(),
        tasks: [
            {
                id: 1,
                title: 'Visit David',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
            {
                id: 2,
                title: 'Goceries For Dinner',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
            {
                id: 3,
                title: 'Fix Dad’s iPad',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: true,
            },
        ]
    },
    {
        date: getDate(),
        tasks: [
            {
                id: 4,
                title: 'Visit Deny',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
            {
                id: 5,
                title: 'Goceries For Dinner',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
            {
                id: 6,
                title: 'Fix Dad’s iPad3',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
        ]
    },
    {
        date: getDate(),
        tasks: [
            {
                id: 7,
                title: 'Visit Deny',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
            {
                id: 8,
                title: 'Goceries For Dinner',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
            {
                id: 9,
                title: 'Fix Dad’s iPad3',
                description: 'Lorem Ipsum Dolor Sit met...',
                isDone: false,
            },
        ]
    }
]