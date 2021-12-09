package izm.sample.batch.testbatch.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@PropertySource(value="classpath:app.properties", encoding="UTF-8")
@ConfigurationProperties(prefix = "app")
@Getter
@Setter
public class MemberAppConfig {
    private String title;

    private String id;
    private String full_name;
    private String password;
    private String age;
    private String birthday;
    private String delete_flag;
    private String list;
    private String edit;
}
