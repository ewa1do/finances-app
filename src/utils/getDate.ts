export function getDate() {
    const date = new Date();

    const day = date.getDate();
    let month: string | number = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
