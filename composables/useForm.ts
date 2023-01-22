import { MaybeRef } from '@vueuse/core';

export function useForm<T>(url: MaybeRef<string>, initialData?: T) {
    const data = reactive(Object.assign({}, initialData));
    const errors = reactive(Object.assign({}, {}));
    const request = useHttp();
    const busy = request.loading;

    function setValues(newData: Partial<T>) {
        Object.assign(data, newData);
    }

    function post<T>() {
        return submit<T>('post');
    }

    function setErrors(newErrors: any) {
        Object.assign(errors, newErrors);
    }

    function submit<T>(method: 'post') {
        return request
            .request<T>(url, { method, body: unref(data) })
            .then((data) => {
                return data;
            })
            .catch((error: any) => {
                setErrors(error.response._data.errors);
            });
    }

    return {
        data,
        busy,
        setValues,
        post,
    };
}
