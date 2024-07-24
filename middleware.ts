import { stackMiddlewares } from "middlewares/stackMiddlewares";
import { withDashboardHeaders } from "middlewares/withDashboardHeaders";
import { withAuth } from "middlewares/withAuth";

const middlewares = [withAuth, withDashboardHeaders];
export default stackMiddlewares(middlewares);

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: '/dashboard/:path*',
// };