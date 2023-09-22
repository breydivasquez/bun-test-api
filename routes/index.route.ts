import { home, homeBlog } from "../controller/home";
import route404 from "../controller/404";
import RouteType from "../common/types/RouteType";
import  path from "path"
import fs from "fs"

function routePath(path: string) {
  let lsPath = fs.readdirSync("./controller");
  console.log('data', lsPath)

  const method: RouteType = {
    "/": home(),
    "/blog": homeBlog(),
  };
  return method[path] || route404();
}

export default routePath;
