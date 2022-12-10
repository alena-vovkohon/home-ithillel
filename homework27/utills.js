export function cookedTask(item) {
     return {
                text: item.title,
                chacked: item.completed,
                editetaple: false,
                id: item.id,
            }
}