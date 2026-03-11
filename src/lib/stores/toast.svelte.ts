type ToastType = 'success' | 'error' | 'info';

interface Toast {
	id: number;
	message: string;
	type: ToastType;
	duration?: number;
}

let toasts = $state<Toast[]>([]);
let nextId = 0;

export const toastStore = {
	get toasts() {
		return toasts;
	},

	show(message: string, type: ToastType = 'info', duration: number = 3000) {
		const id = nextId++;
		const toast: Toast = { id, message, type, duration };
		toasts = [...toasts, toast];
		return id;
	},

	success(message: string, duration?: number) {
		return this.show(message, 'success', duration);
	},

	error(message: string, duration?: number) {
		return this.show(message, 'error', duration);
	},

	info(message: string, duration?: number) {
		return this.show(message, 'info', duration);
	},

	remove(id: number) {
		toasts = toasts.filter((t) => t.id !== id);
	}
};
