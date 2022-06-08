import list_of_reports from "./components/list_of_reports"
import login from "./components/login"
import report from "./components/report"

export const publicRoutes = [
    {path: '/*', element: login, exact: true},
    {path: '/login', element: login, exact: true},
]

export const privateRoutes = [
    {path: '/report', element: report, exact: true},
    {path: '/list_of_reports', element: list_of_reports, exact: true},

]