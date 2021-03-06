import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import { TransformFunction } from '../proj';
import Geometry from './Geometry';
import GeometryLayout from './GeometryLayout';
import GeometryType from './GeometryType';
import SimpleGeometry from './SimpleGeometry';

export default class LinearRing extends SimpleGeometry {
    constructor(coordinates: Coordinate[] | number[], opt_layout?: GeometryLayout);
    clone(): LinearRing;
    closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    getArea(): number;
    getCoordinates(): Coordinate[];
    getType(): GeometryType;
    intersectsExtent(extent: Extent): boolean;
    setCoordinates(coordinates: Coordinate[], opt_layout?: GeometryLayout): void;
    simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): Geometry;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
