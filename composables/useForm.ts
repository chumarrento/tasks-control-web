import { MaybeRef } from '@vueuse/core';

export function useForm<T>(url: MaybeRef<string>, initialData?: T) {
    const data = reactive(Object.assign({}, initialData));
    const errors = reactive(Object.assign({}, {}));
    const request = useHttp();
    const busy = request.loading;
    type IFormData = typeof data;

    function setValues(newData: Partial<T>) {
        Object.assign(data, newData);
    }

    function post<T>(opts?: SubmitOptions<IFormData>) {
        return submit<T>('post', opts);
    }

    function setErrors(newErrors: any) {
        Object.assign(errors, newErrors);
    }

    function submit<T>(method: 'post', { prepareBody }: SubmitOptions<IFormData> = {}) {
        const body = prepareBody ? prepareBody(unref(data)) : unref(data);
        return request
            .request<T>(url, { method, body })
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

export interface SubmitOptions<IFormData> {
    /**
     * Configure the body before sending to the API.
     */
    prepareBody?: ((data: IFormData) => object) | undefined;
}
