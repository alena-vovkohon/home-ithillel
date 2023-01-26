import Folder from "./Folder/Folder";
import File from "./User/File";
import { FOLDER_TYPE } from "./Constants";

export const renderCarentType = (data, expandedFolders) => {
  // console.log(Boolean(expandedFolders.length));

  return data.map((item) =>
    item.type === FOLDER_TYPE ? (
      expandedFolders.some((folger) =>
        folger.replace("/", "") === item.name ? true : false
      ) ? (
        <Folder
          key={JSON.stringify({
            ...item,
            expandedFolders: expandedFolders,
          })}
          name={item.name}
          children={item.children}
          expandedFolders={expandedFolders}
        />
      ) : null
    ) : (
      <File
        key={JSON.stringify({ ...item, expandedFolders: expandedFolders })}
        name={item.name}
        mime={item.mime}
      />
    )
  );
};

export const treeToMap = (data = [], path = "") => {
  let result = {};
  data.forEach((item) => {
    if (item.type === FOLDER_TYPE) {
      let resultNew = treeToMap(item.children, `${path}/${item.name}`);
      result = { ...result, ...resultNew };
    } else {
      result[`${path}/${item.name}`] = item.name;
    }
  });
  return result;
};
