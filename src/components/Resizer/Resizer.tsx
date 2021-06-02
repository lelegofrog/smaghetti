import React, {
	CSSProperties,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { FaArrowsAltH, FaArrowsAltV } from 'react-icons/fa';
import clsx from 'clsx';
import { IconType } from 'react-icons';

type Axis = 'x' | 'y';

type PublicResizerProps = {
	className?: string;
	style?: CSSProperties;
	size: Point;
	increment: number;
	axis: Axis;
	onSizeChange: (newSize: Point) => void;
	onResizeStart: () => void;
	onResizeEnd: () => void;
};

type InternalResizerProps = {
	scale: number;
};

const icons: Record<Axis, IconType> = {
	x: FaArrowsAltH,
	y: FaArrowsAltV,
	// xy: FaArrowsAlt,
};

const CSSProperty: Record<Axis, string> = {
	x: 'left',
	y: 'top',
};

function Resizer({
	className,
	style,
	size,
	axis,
	scale,
	increment,
	onSizeChange,
	onResizeStart,
	onResizeEnd,
}: PublicResizerProps & InternalResizerProps) {
	const start = useRef<Point>({ x: 0, y: 0 });
	const current = useRef<Point>({ x: 0, y: 0 });
	const sizeRef = useRef<Point>(size);
	const scaleRef = useRef<number>(scale);
	const axisRef = useRef<Axis>(axis);
	const onResizeEndRef = useRef<() => void>(onResizeEnd);

	const ref = useRef<HTMLDivElement | null>(null);
	const [listeningToDoc, setListeningToDoc] = useState(false);

	useEffect(() => {
		if (ref.current) {
			const icon = ref.current.querySelector('.resize-icon') as HTMLElement;
			icon.style.setProperty(CSSProperty.x, '0px');
			icon.style.setProperty(CSSProperty.y, '0px');
		}

		if (sizeRef.current) {
			sizeRef.current.x = size.x;
			sizeRef.current.y = size.y;
		}
	}, [size]);

	useEffect(() => {
		onResizeEndRef.current = onResizeEnd;
	}, [onResizeEnd]);

	useEffect(() => {
		scaleRef.current = scale;
	}, [scale]);

	useEffect(() => {
		axisRef.current = axis;
	}, [axis]);

	const onDocumentMouseMove = useCallback(function onDocumentMouseMove(
		e: MouseEvent
	) {
		const inputs: Record<Axis, number> = { x: e.pageX, y: e.pageY };

		const diff =
			(inputs[axisRef.current] - start.current[axisRef.current]) /
			scaleRef.current;

		const icon = ref.current!.querySelector('.resize-icon') as HTMLElement;
		icon.style.setProperty(CSSProperty[axisRef.current], `${diff}px`);

		if (Math.abs(diff) >= increment) {
			const floorCeil = diff < 0 ? Math.ceil : Math.floor;
			const delta = floorCeil(diff / increment);

			if (axisRef.current === 'x') {
				onSizeChange({ x: sizeRef.current.x + delta, y: sizeRef.current.y });
			} else {
				onSizeChange({ y: sizeRef.current.y + delta, x: sizeRef.current.x });
			}
			start.current.x = inputs.x;
			start.current.y = inputs.y;
		}

		current.current.x = inputs.x;
		current.current.y = inputs.y;
	},
	[]);

	const onDocumentMouseUp = useCallback(
		function onDocumentMouseUp() {
			document.removeEventListener('mousemove', onDocumentMouseMove);
			document.removeEventListener('mouseup', onDocumentMouseUp);
			document.removeEventListener('mouseleave', onDocumentMouseUp);
			setListeningToDoc(false);
			onResizeEndRef.current();

			const icon = ref.current!.querySelector('.resize-icon') as HTMLElement;
			icon.style.setProperty(CSSProperty.x, '0px');
			icon.style.setProperty(CSSProperty.y, '0px');
		},

		[]
	);

	const Icon = icons[axis];
	return (
		<div
			ref={ref}
			style={style}
			className={clsx(className, 'w-1.5 h-1.5')}
			onMouseDown={(e) => {
				if (ref.current && !listeningToDoc) {
					e.stopPropagation();
					e.preventDefault();

					start.current.x = e.pageX;
					start.current.y = e.pageY;

					document.addEventListener('mousemove', onDocumentMouseMove);
					document.addEventListener('mouseup', onDocumentMouseUp);
					document.addEventListener('mouseleave', onDocumentMouseUp);

					setListeningToDoc(true);
					onResizeStart();
				}
			}}
		>
			<Icon className="resize-icon absolute w-full h-full bg-blue-700 rounded-full cursor-move" />
		</div>
	);
}

export { Resizer };
export type { PublicResizerProps };