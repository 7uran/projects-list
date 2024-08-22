export interface CreateProjectFormProps {
    onClose: () => void;
}


export interface ProjectDetailsModalProps {
    projectId: string;
    onClose: () => void;
}

export interface ProjectData {
    projectName: string;
    description: string;
    teamMembers: string;
    assignedDate: string;
    dueDate: string;
    status: string;
    priority: string;
}