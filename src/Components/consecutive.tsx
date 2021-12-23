type ConsecutiveProps = {
    numbers: number[]
}
export const Consecutive = (props:ConsecutiveProps) => {
    //const longestSequence=0;
    const givenArray = new Set(props.numbers), counts = {} as any;
   
    let maximumCount:number = 1;
    for (const num of givenArray.values()) {
        let counting = true, next = num + 1;
        givenArray.delete(num);
        while (counting) {
            counting = false;
            while (givenArray.has(next)) { givenArray.delete(next++) }
            console.log(counts);
            if (counts[next]) { counting = givenArray.has(next += counts[next]) }
        }
        maximumCount = Math.max(counts[num] = next - num, maximumCount);
    }
    console.log('maximun value:', maximumCount);
  
    return (
       <div>
           <h2>Test Two: Consecutive numbers in an array</h2>
        <span>The length is: {maximumCount}</span>
       </div>
     );
}