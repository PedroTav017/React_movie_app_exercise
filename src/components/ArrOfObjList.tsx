// components
import { Link } from "react-router-dom";
import { List } from "antd";
// antd styles
import "antd/dist/antd.css";

// list must recieve a dataset of type array (objects with name property)
// optional action and url props
const ArrOfObjList = (props: { data: []; action?: any; url?: string }) => {
  const list = props.data.map((item: any, id: any) => (
    <List.Item key={id}>
      {props.url ? (
        <Link
          to={props.url}
          onClick={() => props.action && props.action(item)}
          style={{ width: "100%", height: "100%" }}
        >
          {item.name}
        </Link>
      ) : (
        item.name
      )}
    </List.Item>
  ));
  return (
    <List itemLayout="horizontal" dataSource={props.data} size="small">
      {list}
    </List>
  );
};

export default ArrOfObjList;
