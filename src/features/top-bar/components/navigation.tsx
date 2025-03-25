import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem, NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { ListItem } from "./list-item";

type NavigationItem = {
  trigger: string;
  content: {
    href: string;
    title: string;
    description: string;
  }[];
};

const navigationItems: NavigationItem[] = [
  {
    trigger: 'Models',
    content: [
      {
        href: "/models/gemma",
        title: "Gemma",
        description: "Open source models from Google",
      }
    ]
  },
  {
    trigger: 'Posts',
    content: [
      {
        href: "/posts",
        title: "All posts",
        description: "See all my articles",
      }
    ]
  },
];


export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-wrap w-[200px] gap-3 p-2 md:grid-cols-2">
                  {item.content.map((contentItem, index) => (
                    <ListItem
                      key={index}
                      href={contentItem.href}
                      title={contentItem.title}
                    >
                      {contentItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
};

