import { create } from "zustand";
import { VideoData } from "../videos";
import { DEFAULT_VIDEOS } from "../values";


type AccountType = 'Private' | 'Public';

type UserState = {
  firstName: string,
  lastName: string,
  middleName?: string,
  userName: string,
  accountType: AccountType,
  photo?: string,
  phone: string,
  videos: VideoData[],
  updateFirstName: (firstName: string) => void,
  updateLastName: (lastName: string) => void,
  updateMiddleName: (middleName?: string) => void,
  changeAccountType: (accountType: AccountType) => void,
  changePhone: (phone: string) => void
}

export const useUserStore = create<UserState>((set) => ({
  firstName: 'Александр',
  lastName: 'Болотов',
  middleName: 'Юрьевич',
  userName: '@ToxicCreator',
  accountType: 'Private',
  photo: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg',
  phone: '+7 (910) 234 85 71',
  videos: DEFAULT_VIDEOS,

  updateFirstName: (firstName: string) => set(
    (userState) => ({
      ...userState,
      firstName
    })
  ),
  updateLastName: (lastName: string) => set(
    (userState) => ({
      ...userState,
      lastName
    })
  ),
  updateMiddleName: (middleName?: string) => set(
    (userState) => ({
      ...userState,
      middleName
    })
  ),
  changeAccountType: (accountType: AccountType) => set(
    (userState) => ({
      ...userState,
      accountType
    })
  ),
  changePhone: (phone: string) => set(
    (userState) => ({
      ...userState,
      phone
    })
  )
}));
