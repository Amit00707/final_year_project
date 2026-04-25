export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  points: number;
  streakDays: number;
  hasStreakFreeze: boolean;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  pdfBlobUrl?: string; // Must strictly be streamed securely
  totalPages: number;
}

export interface ReadingProgress {
  userId: string;
  bookId: string;
  currentPage: number;
  percentageCompleted: number;
  lastReadAt: string;
}

export interface AIQuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface TeacherClass {
  id: string;
  name: string;
  studentCount: number;
  assignedBooks: string[];
}
