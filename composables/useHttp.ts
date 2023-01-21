import { MaybeRef } from '@vueuse/shared';
import { ref, unref } from 'vue';

export function useHttp() {
    const config = useRuntimeConfig();
    const loading = ref(false);

    const get = <T>(url: MaybeRef<string>, opts?: any) => request<T>(url, { method: 'get', ...opts });
    const post = <T>(url: MaybeRef<string>, opts?: any) => request<T>(url, { method: 'post', ...opts });
    const put = <T>(url: MaybeRef<string>, opts?: any) => request<T>(url, { method: 'put', ...opts });
    const destroy = <T>(url: MaybeRef<string>, opts?: any) => request<T>(url, { method: 'delete', ...opts });

    const request = <T>(url: MaybeRef<string>, opts: any) => {
        loading.value = true;
        return $fetch<T>(prepareUrl(url), prepareOpts(opts))
            .catch(onError)
            .finally(() => (loading.value = false));
    };

    const prepareUrl = (url: MaybeRef<string>): string => new URL(unref(url), config.public.api).href;
    const prepareOpts = (opts: any) => ({
        credentials: 'include',
        headers: {
            accept: 'application/json, text/plain, */*',
        },
        ...opts,
    });
    const onError = (error: any) => {
        console.log(error)
    };

    return {
        get,
        post,
        put,
        destroy,
        request,
        loading,
    };
}
