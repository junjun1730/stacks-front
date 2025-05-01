import { StackSelectButton } from "./StackSelectButton";

export function StackSelectList() {
  const stackList = [
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    {
      name: "googlecodebuild",
      image: "/assets/img/stacks_logo/alamofire.png",
    },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
    { name: "test5", image: "/assets/img/stacks_logo/alamofire.png" },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {stackList.map((e, i) => {
        return <StackSelectButton key={i} name={e.name} imageSrc={e.image} />;
      })}
    </div>
  );
}
