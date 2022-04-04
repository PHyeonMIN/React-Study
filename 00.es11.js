// Optional chaining : 있으면 다음 실행

function printManager(person) {
    console.log(person.job?.manager?.name);
}

//=====================================================================================================================

// Nullish Coalescing Operator
//      false : false, '', 0, null, undefined
    const name =null;
    const userName = name || 'Guest';
    // userName = 'Guest'   // name이 '' 이거나 0일때도 Guest 반환

const name1 = '';
const userName1 = name ?? 'Guest';

const num = 0;
const message = num ?? 'undefined';

// null 일때만 뒷값 출력