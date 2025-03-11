import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem, NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { ListItem } from "./list-item";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-wrap w-[200px] gap-3 p-2 md:grid-cols-2">
              <ListItem href="/blog" title="All posts">
                See all my articles
              </ListItem>
              {/* <ListItem href="/blog" title="AI for Developers">
                Posts related to AI tools, agents, models etc. we can use in programming.
              </ListItem> */}
              {/* <ListItem href="/blog" title="Web development.">
                Posts and topic related to web development. Both frontend and backend.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

