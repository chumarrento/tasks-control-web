import { MaybeRef } from "@vueuse/core";

export function useForm<T>(url: MaybeRef<string>, initialData?: T) {
    const data = reactive(Object.assign({}, initialData));
    const request = useHttp();
    const busy = request.loading;

    function setValues(newData: Partial<T>) {
        Object.assign(data, newData)
    }

    function post() {
        return submit('post')
    }

    function submit(method: 'post') {
        return request.request(url, { method, body: unref(data) })
            .then((data) => {
                console.log(data)
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    return {
        data,
        busy,
        setValues,
        post
    }
}