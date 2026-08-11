type Props = React.InputHTMLAttributes<HTMLInputElement>;
export function Input(props: Props) { return <input {...props} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />; }
