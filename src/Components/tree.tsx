interface TreeNode {
    id: number
    values: number[]
    children?: TreeNode[]
  }
  interface treeProps {
      items:TreeNode[],
      itemValue:number
  }
const searchTree =(treeObj:TreeNode,searchElem:number):number => {
    if(treeObj.values.length > 0){
        if(treeObj.values.includes(searchElem)){
            return treeObj.id; //Found element in value
        }else if(treeObj.children && treeObj.children?.length){//check for child elements
            let childElement = treeObj.children;
            let childIndex;
            let result = 0;
            let childLength = childElement?.length;
            if(childLength){
                for(childIndex=0; result === 0 && childIndex < childLength; childIndex++){//loop through the child element to find the array and call fuction recursively
                  result = searchTree(childElement[childIndex],searchElem);
                    console.log('result:', result);
                    if(result !== 0){
                        return result;//Return the matching element
                    }
                    
                }

            }
            
            

        }

    }
    return 0;// Return 0 if no element is found

}
export const Tree = (props:treeProps) => {
    let treeArr:TreeNode[] = props.items;
    let matchingID = 0
    for(let i=0;i<treeArr.length;i++){
       //console.log(treeArr[i]);
         matchingID = searchTree(treeArr[i], props.itemValue);
        console.log('idElement:', matchingID);
       
    }
 
    
    return (

        <div>
      {matchingID === 0 ?  (
         <div>
         <h2>Test 1: Find an ID in a simple tree </h2>
       <span>The Matching Id for the element {props.itemValue} is :: <strong>ID Not Found</strong> </span>
     </div>
      ) : (
        <div>
        <h2>Test 1: Find an ID in a simple tree </h2>
      <span>The Matching Id for the element {props.itemValue} is :: {matchingID} </span>
    </div>
      )}
    </div>
    
    );
}