import React from "react";
import { useForm } from "react-hook-form";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        alert(JSON.stringify(data))
        console.log(data);
    };


    return (
        <div className="form">
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <h1 className="formh d-flex mt-5 justify-content-center">상담문의</h1>
                </div>

                <fieldset>
                    <div className="dda d-flex">
                        <div className="user row">
                            <div>
                                <label className="col-3 m-10 0" htmlFor="name">

                                </label>
                                <input
                                    className={`mt-5 mb-4 0 ${errors.name ? "invalid" : "valid"}`}
                                    id="name"
                                    type="text"
                                    placeholder="이름"
                                    {...register("name", { required: "이름은 필수 입력입니다." })}
                                />
                                {errors.name && <small>{errors.name.message}</small>}
                            </div>
                            <div>
                                <label className="col-3" htmlFor="address">

                                </label>
                                <input
                                    className={`mb-4 0 ${errors.address ? "invalid" : "valid"}`}
                                    id="address"
                                    type="text"
                                    placeholder="주소"
                                    {...register("address", { required: "주소는 필수 입력입니다." })}
                                />
                                {errors.address && <small>{errors.address.message}</small>}
                            </div>
                            <div>
                                <label className="col-3" htmlFor="email">
                                </label>
                                <input
                                    className={`mb-4 0 ${errors.email ? "invalid" : "valid"}`}
                                    id="email"
                                    type="email"
                                    placeholder="test@email.com"
                                    {...register("email", {
                                        required: "이메일은 필수 입력입니다.",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "이메일 형식에 맞지 않습니다.",
                                        },
                                    })}
                                    aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined
                                    }
                                />

                                {errors.email && (
                                    <small role="alert" id="email-error">
                                        {errors.email.message}
                                    </small>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <textarea
                                className="text col-lg-11 my-3 d-block col-md-12"
                                id="tx"
                                cols="40"
                                rows="6"
                                placeholder="불편 사항이나 문의 사항 남겨주시면 신속하고 친절하게 안내해 드리겠습니다."
                                {...register("message")}
                            ></textarea>
                        </div>
                    </div>
                    <div className="btns">
                        <button type="submit" disabled={isSubmitting}>
                            문의하기
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;