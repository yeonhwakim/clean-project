checklist

MODEL
checklist-read
    checklistId
    categoryCd 
    title
    label
    description
    date
    iconPath
    isChecked
checklist-write
    checklistId 
    title
    label
    description
    iconPath -- 로직에서 변경
checklist-update
    checklistId 
    title
    label
    description
    iconPath -- 로직에서 변경
checklist-delete
    checklistId

DB
user
    id - email @앞부분
    nickname - google 정보

checklist
    checklistId
    userId
    categoryCd
    title
    label
    description 
    iconPath 

checklist-his
    checkListId
    userId
    date

category
    id
    cd
    name

icon
    id
    name
    path
    