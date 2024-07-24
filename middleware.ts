import { stackMiddlewares } from "middlewares/stackMiddlewares";
import { withDashboardHeaders } from "middlewares/withDashboardHeaders";

const middlewares = [withDashboardHeaders];
export default stackMiddlewares(middlewares);

// export const config = {
//   matcher: '/dashboard/:path*',
// };