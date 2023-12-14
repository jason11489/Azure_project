

export default function format(str) {


    let week = str.substr(6, 3);
    let month = str.substr(10, 3);

    const data = [];

    switch (week) {
        case 'Mon':
            data.push('월요일');
            break;
        case 'Tue':
            data.push('화요일');
            break;
        case 'Wed':
            data.push('수요일');
            break;
       case 'Thu':
            data.push('목요일');
            break;
        case 'Fri':
            data.push('금요일');
            break;
        case 'Sat':
            data.push('토요일');
            break;
        case 'Sun':
            data.push('일요일');
            break;

    }

    switch (month) {
        case 'Jan':
            data.push('1월');
            break;
        case 'Feb':
            data.push('2월');
            break;
        case 'Mar':
            data.push('3월');
            break;
        case 'Apr':
            data.push('4월');
            break;
        case 'May':
            data.push('5월');
            break;
        case 'Jun':
            data.push('6월');
            break;
        case 'Jul':
            data.push('7월');
            break;
        case 'Aug':
            data.push('8월');
            break;
        case 'Sept':
            data.push('9월');
            break;
        case 'Oct':
            data.push('10월');
            break;
        case 'Nov':
            data.push('11월');
            break;
        case 'Dec':
            data.push('12월');
            break;
    }


    return data;




};