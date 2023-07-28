import { IDescriptor } from "@/models/descriptor";
import { Dispatch, SetStateAction } from "react";

/**
 * Remove a descriptor by its id or the focused one and call the SetState function
 */
export function removeOneAndSetDescriptors(
  setDescriptors: Dispatch<SetStateAction<IDescriptor[]>>,
  id?: string
) {
  let updated = false;
  setDescriptors((descriptors) => {
    if (descriptors.length) {
      updated = true;
      const target = getDescriptor(descriptors, id);
      return descriptors.filter((descriptor) => descriptor !== target);
    }
    return descriptors;
  });
  return updated;
}

export function updateStateAndSetDescriptors<T extends Partial<IDescriptor>>(
  setDescriptors: Dispatch<SetStateAction<IDescriptor[]>>,
  state: T,
  id?: string,
  preCheck?: (descriptor: IDescriptor, state: T) => boolean | undefined
) {
  let updated = false;
  setDescriptors((descriptors) => {
    if (descriptors.length) {
      const target = getDescriptor(descriptors, id);
      if (!preCheck || preCheck(target, state)) {
        updated = true;
        return descriptors.map((descriptor) =>
          descriptor !== target ? descriptor : { ...descriptor }
        );
      }
    }
    return descriptors;
  });
  return updated;
}

export function rotateAndSetDescriptors(
  setDescriptors: Dispatch<SetStateAction<IDescriptor[]>>,
  direction: -1 | 1
) {
  setDescriptors((descriptors) => {
    if (descriptors.length > 1) {
      const items = descriptors.slice().sort((a, b) => a.zIndex - b.zIndex);
      if (direction < 0) {
        items.push(items.shift()!);
      } else {
        items.unshift(items.pop()!);
      }
      return items.map((descriptor, index) => ({
        ...descriptor,
        zIndex: index + 1,
      }));
    }
    return descriptors;
  });
}

export function getDescriptorById(
  descriptors: IDescriptor[],
  id: string
): IDescriptor {
  const descriptor = descriptors.find((descriptor) => descriptor.id === id);
  if (!descriptor) {
    throw new Error("descriptor not found");
  }
  return descriptor;
}

export function getFocusedDescriptor(descriptors: IDescriptor[]): IDescriptor {
  if (!descriptors.length) {
    throw new Error("empty descriptor list");
  }
  return descriptors.reduce((selected, descriptor) =>
    selected.zIndex > descriptor.zIndex ? selected : descriptor
  );
}

export function getDescriptor(
  descriptors: IDescriptor[],
  id?: string
): IDescriptor {
  return id
    ? getDescriptorById(descriptors, id)
    : getFocusedDescriptor(descriptors);
}

export function getMaxZIndex(descriptors: IDescriptor[]): number {
  return descriptors.length ? getFocusedDescriptor(descriptors).zIndex : 0;
}

/**
 * Return the descriptor list with the corresponding one updated to get the max zIndex value
 */
export function focusedDescriptor(descriptors: IDescriptor[], id: string) {
  const focused = getFocusedDescriptor(descriptors);
  if (focused.id === id) {
    return descriptors;
  }
  return descriptors.map((descriptor) =>
    descriptor.id === id
      ? { ...descriptor, zIndex: focused.zIndex + 1 }
      : descriptor
  );
}
