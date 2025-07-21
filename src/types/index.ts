export interface IUsers {
  id: string;
  email: string;
  username: string;
  fullname: string;
  birthdate: Date;
  password: string; //Hashed Password
  isValidated: boolean;
  otp?: number;
  role: Role;
}

export interface IApplicants {
  id: string;
  email: string;
  fullname: string;
  birthdate: Date;
  password: string; //Hashed Password
  isValidated: boolean;
  gender: Gender;
  profileImgurl: string;
  about?: string;
  otp?: number;
}

export interface IJobs {
  id: string;
  position: string;
  jobLocType: JobLocationType;
  empType: EmploymentType;
  publisherId: string;
  qualification: string;
  description: string;
  deadline: Date;
}

export interface IResumes {
  id: string;
  applicantId: string;
  jobId: string;
  resumeName: string;
  resumeUrl: string;
}

export interface ISchedules {
  id: string;
  applicantId: string;
  jobId: string;
  scheduleDate: Date;
  scheduleTime: string;
  location?: string;
  linkMeet?: string;
  status: ScheduleStatus;
  mode: InterviewMode;
}

export interface IScheduleTable {
  id: string;
  scheduleDate: string;
  scheduleTime: string;
  location?: string;
  linkMeet?: string;
  mode: "ONLINE" | "OFFLINE";
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  applicant: {
    fullname: string;
    email: string;
  };
  job: {
    position: string;
  };
}

export interface IApplicantsJobs {
  id: string;
  applicantId: string;
  jobId: string;
  status: JobStatus;
}

export interface IApply extends IApplicantsJobs {
  applicant: IApplicants;
  job: IJobs;
  resume: IResumes;
}

export interface INotifications {
  id: string;
  applicantId?: string;
  hrId?: string;
  title: string;
  message: string;
  isRead: boolean;
}

enum Role {
  HR = "HR",
  ADMIN = "ADMIN",
}

enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

enum JobLocationType {
  REMOTE = "REMOTE",
  ONSITE = "ONSITE",
}

enum EmploymentType {
  FULLTIME = "FULLTIME",
  INTERNSHIP = "INTERNSHIP",
}

export enum JobStatus {
  PENDING = "PENDING",
  REVIEWED = "REVIEWED",
  REJECTED = "REJECTED",
  ACCEPTED = "ACCEPTED",
}

export enum InterviewMode {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

export enum ScheduleStatus {
  CONFIRMED = "CONFIRMED",
  RESCHEDULED = "RESCHEDULED",
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
}
