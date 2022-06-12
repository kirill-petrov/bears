import list_of_reports from "./components/list_of_reports"
import Login from "./components/Login"
import report from "./components/report"

export const publicRoutes = [
    {path: '/*', element: Login, exact: true},
    {path: '/login', element: Login, exact: true},
]

export const privateRoutes = [
    {path: '/report', element: report, exact: true},
    {path: '/list_of_reports', element: list_of_reports, exact: true},

]