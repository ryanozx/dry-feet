const fakeLocations = ["AS6","CLB","CLB Bridge","COM1","COM2","COM3","E1","E1A","E2","E2A","E3","E3A","E4","E4A","E5","E7","E8","EA","TLAB","Techno Edge"]
const fakePath = []

const getLocations = async () => {
    return fakeLocations;

    const res = await fetch('localhost:5000/api/locations');
    const data = await res.json();
    return data;
}

const queryPath = async (start, end, isSheltered, isAccessible) => {
    return fakePath;

    const url = new URL('localhost:5000/api/find_path');
    url.searchParams.append('from', start);
    url.searchParams.append('to', end);
    url.searchParams.append('isSheltered', isSheltered);
    url.searchParams.append('isAccessible', isAccessible);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export { getLocations, queryPath };