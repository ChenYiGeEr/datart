package datart.server.controller;

import datart.server.base.dto.ResponseData;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HomeController
 *
 * @author lim
 * @version 1.0
 * @since 2024/3/14 10:16
 */
@Api
@RestController
@RequestMapping
public class HomeController {

    /**
     * 方法：home
     * <p>默认页 </p>
     *
     * @return datart.server.base.dto.ResponseData
     * @since 2023/11/21 10:11
     * @author lim
     */
    @ApiOperation(value = "返回默认页")
    @GetMapping
    public ResponseData<String> home() {
        return ResponseData.success("Welcome to Datart!");
    }

}
