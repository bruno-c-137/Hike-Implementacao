import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    errors: Array<string | undefined> | undefined;
    onClose: () => void;
}
export default function DialogError({ isOpen, errors, onClose }: ModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Atenção
                                </Dialog.Title>
                                <div className="my-5 space-y-1">
                                    {
                                        errors?.map((item, index) => {
                                            return (
                                                <p className="text-sm text-red-400" key={index}>
                                                    * {item}
                                                </p>
                                            )
                                        })
                                    }
                                </div>

                                <div className="mt-4 flex justify-center">
                                    <button
                                        type="button"
                                        className=" rounded-md border border-transparent bg-[#1462AC] text-white px-4 py-2 text-sm font-medium focus:outline-none btn-submit"
                                        onClick={onClose}
                                    >
                                        OK
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}